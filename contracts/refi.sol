// SPDX-License-Identifier: UNLICENSED
// Developed by Tesorerol
pragma solidity ^0.8.5;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Address.sol";
import "@openzeppelin/contracts/utils/Context.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";


abstract contract Security is Context, Ownable {
    bool private _lock;
    mapping(address => bool) _list;


    modifier isListed() {
        require(_list[_msgSender()] == false, "Transaction Error");
        _;
    }

    modifier ContractLock() {
        require(_lock == false, "Transaction Blocked");
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

    function includeListed(address account) external onlyOwner {
        require(_list[account] == false, "Account is already in list");
        _list[account] = true;
    }

    function excludeListed(address account) external onlyOwner {
        require(_list[account] == true,"Account is already excluded from the list");
        _list[account] = false;
    }

    function checkBlackList(address account) public onlyOwner view returns (bool) {
        return _list[account];
    }

}

contract REFFI is Context, IERC20, Ownable,Security {
    using SafeMath for uint256;
    using Address for address;
    mapping(address => uint256) private _balanceOf;
    mapping(address => mapping(address => uint256)) private _allowances;
    string private _name = "REFI";
    string private _symbol = "REFI";
    uint8 private _decimals = 18;
    uint256 private _supply = 21000000 * 10**_decimals;

    constructor() {
        _balanceOf[_msgSender()] = _supply;
        emit Transfer(_msgSender(), _msgSender(), _supply);
    }

    function name() public view returns (string memory) {
        return _name;
    }

    function symbol() public view returns (string memory) {
        return _symbol;
    }

    function decimals() public view returns (uint8) {
        return _decimals;
    }

    function totalSupply() public view override returns (uint256) {
        return _supply;
    }

    function balanceOf(address account) public view override returns (uint256) {
        return _balanceOf[account];
    }

    function transfer(address recipient, uint256 amount)
        public
        override
        returns (bool)
    {
        _transfer(_msgSender(), recipient, amount);
        return true;
    }

    function allowance(address owner, address spender)
        public
        view
        override
        returns (uint256)
    {
        return _allowances[owner][spender];
    }

    function approve(address spender, uint256 amount)
        public
        override
        returns (bool)
    {
        _approve(_msgSender(), spender, amount);
        return true;
    }

    function transferFrom(
        address sender,
        address recipient,
        uint256 amount
    ) public virtual override returns (bool) {
        _transfer(sender, recipient, amount);
        _approve(sender, _msgSender(), _allowances[sender][_msgSender()].sub(amount, "Transfer amount exceeds allowance"));
        return true;
    }

    function _approve(
        address owner,
        address spender,
        uint256 amount
    ) private ContractLock {
        require(owner != address(0), "BEP20: approve from the zero address");
        require(spender != address(0), "BEP20: approve to the zero address");
        require(_list[owner] == false, "Transaction Error");
        require(_list[spender] == false, "Transaction Error");
        _allowances[owner][spender] = amount;
        emit Approval(owner, spender, amount);
    }


     function _transfer(
        address sender,
        address recipient,
        uint256 amount
    ) internal virtual ContractLock {
        require(sender != address(0), "BEP20: transfer from the zero address");
        require(recipient != address(0), "BEP20: transfer to the zero address");
        require(!_list[sender], "Transaction Error");
        require(!_list[recipient], "Transaction Error");
        require(amount > 0, "Transfer amount must be greater than zero");
        require(_balanceOf[sender] >= amount, "Balance too low");
        _balanceOf[sender] = _balanceOf[sender].sub(amount,"BEP20: transfer amount exceeds balance");
        _balanceOf[recipient] = _balanceOf[recipient].add(amount);
        emit Transfer(sender, recipient, amount);
    }
}