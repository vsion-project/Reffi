// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "hardhat/console.sol";

contract REFFISELL is ReentrancyGuard, Ownable {
    using SafeMath for uint256;
    uint256 phase = 1;
    uint nonce;
    bool _lock;
    address WalletDindon;
    bool ActiveWhiteList;
    uint256 public PhaseSelling;
    uint256 public TotalSelling;
    IERC20 Reffi;
    IERC20 Vsion;
    mapping(address => bool) private WhiteList;
    mapping(address => bool) private TokensAccept;
    mapping(address => bool) private referer;
    mapping(uint256 => Phases) private PhasesList;
    mapping(address => uint256) private s_security;
    event ReffiBuyed(address buyer, uint256 _amount);
    event AirdopReferal(address refer, uint256 _amount);

    struct Phases {
        uint256 price;
        uint256 amount;
    }

    constructor(address _criptovision, address _refi, address _walletDindon) {
        WalletDindon = _walletDindon;
        Reffi = IERC20(_refi);
        Vsion = IERC20(_criptovision);
        addPhases();
        TokensAccept[0x55d398326f99059fF775485246999027B3197955] = true;
        TokensAccept[0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56] = true;
    }

    modifier ContractLock() {
        require(!_lock, "Venta Pausada");
        _;
    }

    //Locks the contract for owner for the amount of time provided
    function lock() external onlyOwner {
        _lock = true;
    }

    //Unlocks the contract for owner when _lockTime is exceeds
    function unlock() external onlyOwner {
        _lock = false;
    }

    function ChangeActivateWhiteList() public onlyOwner {
        ActiveWhiteList = !ActiveWhiteList;
    }

    function AddPhase(
        uint256 _phase,
        uint256 _price,
        uint256 _amount
    ) public onlyOwner {
        PhasesList[_phase] = Phases(_price, _amount);
    }

    function ChangePhase(uint256 _number) public onlyOwner {
        phase = _number;
        PhaseSelling=0;
    }

    function AddWhiteList(address _address) public onlyOwner {
        WhiteList[_address] = true;
    }

    function AddTokenAccept(address _address) public onlyOwner {
        TokensAccept[_address] = true;
    }

    function getPhase() public view returns (uint256) {
        return phase;
    }

    function getPhasePrice() public view returns (uint256) {
        return PhasesList[phase].price;
    }

    function getPhaseCost() public view returns (uint256) {
        return PhasesList[phase].amount;
    }

    function ChangeWalletLiquidity(address _address) public onlyOwner{
        WalletDindon=_address;
    }

    function BuyReffi(
        address _token,
        uint256 _amount
    ) public nonReentrant ContractLock {
        require(TokensAccept[_token], "Invalid Token");

        Phases memory phaseInfo = PhasesList[phase];

        uint256 _percent = GetPercentVsionHolder(msg.sender, _amount);
        uint256 _price = GetPriceVsionHolder(msg.sender, phaseInfo.price);

        if (ActiveWhiteList)
            require(WhiteList[msg.sender], "You are not in WhiteList");

        require(
            IERC20(_token).balanceOf(msg.sender) >= _amount,
            "Balance To Low"
        );

        uint256 ReffiAmount = _amount / _price;
        uint256 totalReffiBuy = (((ReffiAmount / 100) * _percent) + ReffiAmount)*10**18;

        PhaseSelling += totalReffiBuy;

        TotalSelling += _amount;

        if (phaseInfo.amount == PhaseSelling) {
            phase += 1;
            PhaseSelling += 0;
        }

        require(
            IERC20(_token).transferFrom(msg.sender, WalletDindon, _amount),
            "Error in Transfer"
        );
        require(Reffi.transfer(msg.sender, totalReffiBuy), "Error in Transfer");

        emit ReffiBuyed(msg.sender, ReffiAmount);
    }

    function addPhases() public {
        PhasesList[1] = Phases(100000000000000000, 6006000 ether);
        PhasesList[2] = Phases(150000000000000000, 2625000 ether);
        PhasesList[3] = Phases(200000000000000000, 2625000 ether);
        PhasesList[4] = Phases(250000000000000000, 2625000 ether);
    }

    function GetPercentVsionHolder(
        address _user,
        uint256 _amount
    ) internal view returns (uint256 percent) {
        uint256 balanceVsion = Vsion.balanceOf(_user);
        balanceVsion = balanceVsion / 10 ** 8;
        _amount = _amount / 10 ** 18;
        uint256 _percent = 0;
        // 10 a 50 usdt un 25 % adiciinal.
        // 51 a 100 usdt un 50% adicional.
        // 101 a 1000 USDT 100 %
        // 1001 a 10000 USDT  200 %

        if (balanceVsion > 1) {
            if (balanceVsion >= 250000 && _amount >= 50) {
                _percent = 25;
            }

            if (
                balanceVsion >= 500000 &&
                _amount >= 100 
            ) {
                _percent = 50;
            }

            if (
                balanceVsion >= 500001 &&
                balanceVsion <= 1000000 &&
                _amount >= 500
            ) {
                _percent = 100;
            }

            if (
                balanceVsion >= 1000000 && _amount >= 1000
            ) {
                _percent = 150;
            }

            if (
                balanceVsion >= 1000000 && _amount >= 5000
            ) {
                _percent = 200;
            }
        }else{
            if (_amount >= 50) {
                _percent = 25;
            }

            if ( _amount >= 100 ) {
                _percent = 50;
            }

            if (_amount >= 500) {
                _percent = 100;
            }

            if ( _amount >= 1000) {
                _percent = 150;
            }
            if ( _amount >= 5000) {
                _percent = 200;
            }
        }
        return _percent;
    }

    function GetPriceVsionHolder(
        address _user,
        uint256 _price
    ) internal view returns (uint256) {
        uint256 balanceVsion = Vsion.balanceOf(_user);
        uint256 NewPrice = _price;
        if (balanceVsion > 1 * 10 ** 8) {
            NewPrice = _price.sub(0.05 ether);
        }
        return NewPrice;
    }

    function RecoverTokens (address _token) public onlyOwner{
        IERC20(_token).transfer(owner(),IERC20(_token).balanceOf(address(this)));
    }

}
