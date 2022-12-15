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
    uint256 PhaseSelling;
    uint256 TotalSelling;
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

    constructor(address _criptovision, address _refi,address _walletDindon) {
        WalletDindon = _walletDindon;
        Reffi = IERC20(_refi);
        Vsion = IERC20(_criptovision);
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

    /*function ChangeWalletLiquidity(address _address) public onlyOwner{
        WalletLiquidity=_address;
    }*/

    function BuyReffi(
        address _token,
        uint256 _amount
    ) public nonReentrant ContractLock {
        require(TokensAccept[_token], "Invalid Token");

        Phases memory phaseInfo = PhasesList[phase];

        uint256 _percet = GetDiscountVsionHolder(msg.sender, _amount);

        if (ActiveWhiteList)
            require(WhiteList[msg.sender], "You are not in WhiteList");

        require(
            IERC20(_token).balanceOf(msg.sender) >= _amount,
            "Balance To Low"
        );

        uint256 ReffiAmount = ((_amount / phaseInfo.price) / 100) * _percet;

        console.log(ReffiAmount,_amount,phaseInfo.price,_percet);

        PhaseSelling+=_amount;

        TotalSelling+=_amount;

        if (phaseInfo.amount == PhaseSelling) {
            phase += 1;
            PhaseSelling+=0;
        }

        require(
            IERC20(_token).transferFrom(msg.sender, WalletDindon, _amount),
            "Error in Transfer"
        );
        require(
            Reffi.transferFrom(address(this), msg.sender, ReffiAmount),
            "Error in Transfer"
        );

        emit ReffiBuyed(msg.sender,ReffiAmount);
    }

    function addPhases() public {
        PhasesList[1] = Phases(100000000000000000, 6006000 ether);
        PhasesList[2] = Phases(150000000000000000, 2625000 ether);
        PhasesList[3] = Phases(200000000000000000, 2625000 ether);
        PhasesList[4] = Phases(250000000000000000, 2625000 ether);
    }

    function GetDiscountVsionHolder(
        address _user,
        uint256 _amount
    ) internal view returns (uint256 percent) {
        uint256 balanceVsion = Vsion.balanceOf(_user);
        // 10 a 50 usdt un 25 % adiciinal.
        // 51 a 100 usdt un 50% adicional.
        // 101 a 1000 USDT 100 %
        // 1001 a 10000 USDT  200 %

        // OJO!! debes agregar aqui el precio -0.05 usdt a los vsioners
        if (balanceVsion > 1 * 10 ** 8) {
            if (balanceVsion < 250000 * 10 ** 8 && _amount < 50 * 10 ** 18) {
                return 25;
            }

            if (
                balanceVsion < 500000 * 10 ** 8 &&
                _amount > 50 * 10 ** 18 &&
                _amount < 100 * 10 ** 18
            ) {
                return 50;
            }

            if (
                balanceVsion < 1000000 * 10 ** 8 &&
                _amount > 100 * 10 ** 18 &&
                _amount < 1000 * 10 ** 18
            ) {
                return 100;
            }

            if (balanceVsion > 1000000 * 10 ** 8 && _amount > 1000 * 10 ** 18) {
                return 200;
            }
        }

        return 0;
    }
}
