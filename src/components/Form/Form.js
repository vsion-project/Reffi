import React, { useContext, useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import Web3 from 'web3'
import REfiAbi from '../artifacts/contracts/refisell.sol/REFFISELL.json'
import ERC20 from '../artifacts/ERC20.json'
import { WalletContext } from '../Providers/Wallet'
const Form = () => {
  const { address, Provider } = useContext(WalletContext)
  const [SelecToken, setSelecToken] = useState(
    '0x55d398326f99059fF775485246999027B3197955',
  )
  const [Amount, setAmount] = useState(0)
  const [Aprove, setAprove] = useState(true)
  const SellContract = "0x62e435FFf6a970ED5462965b4Ec89f4B41254bb6";
  let web3 = new Web3(Provider)
  let erc20 = new web3.eth.Contract(
    ERC20,
    SelecToken,
  )
  let MarketContract = new web3.eth.Contract(
    REfiAbi.abi,
    SellContract,
  )
  useEffect(() => {
    MarketContract.methods
      .TotalSelling()
      .call()
      .then((r) => console.log(r))
    if (address) {
      erc20.methods
        .allowance(address, SellContract)
        .call()
        .then((r) => {
          r > 0 ? setAprove(false) : setAprove(true)
        })
        console.log("address")
    }
  }, [address, SelecToken])

  const AproveToken = () => {
    Swal.fire({
      title: 'Espere por favor',
      html: 'Aprobando Tokens',
      timerProgressBar: true,
      allowOutsideClick: false,
      allowEnterKey: false,
      allowEscapeKey: false,
      showCancelButton: false,
      didOpen: () => {
        Swal.showLoading()
      },
    })

    erc20.methods
      .approve(
        SellContract,
        '999999999000000000000000000',
      )
      .send({ from: address })
      .then((r) => {
        if (r.status == true) {
          setAprove(false)
          Swal.fire({
            icon: 'success',
            title: 'Tokens Aprobados',
            showConfirmButton: true,
          })
        }
      })
  }

  function BuyReffi() {
    Swal.fire({
        title: 'Por favor Espera',
        html: 'Transacción Enviada',
        timerProgressBar: true,
        allowOutsideClick: false,
        allowEnterKey: false,
        allowEscapeKey: false,
        didOpen: () => {
          Swal.showLoading()
        },
      })
    let amount = web3.utils.toWei(Amount.toString(), 'ether')
    MarketContract.methods
      .BuyReffi(SelecToken, amount)
      .send({ from: address })
      .then(r=>{
        Swal.fire({
            icon: 'success',
            title: 'Tokens Comprados',
            footer: `<a style="margin-right:15px;" className="btn btn-primary" href="${`https://bscscan.com/tx/${r.transactionHash}`}" target="__blank">Ver TX</a> `,
          })
          setAmount(0)
      })
      .catch()
  }
  return (
    <div class="services-area style-two pt-90 pb-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-sm-12">
            <div class="dreamit-section-title text-center style-two pb-5">
              <h4>PARTICIPA EN LA PREVENTA DE REFFI</h4>
              <h1>¡COMPRA EL TOKEN REFFI AHORA!</h1>
              <p class="section-text" style={{ textAlign: 'justify' }}>
                El token Reffi es el token utility que impulsa nuestro
                ecosistema de Aplicaciones de economía Colaborativa – Startup
                Blockchain. <br />
                Participa de las preventas más atractivas de este 2022-2023.
                <br />
                Puedes comprar directamente con USDT, BNB, BUSD. <br />
                Cuando concluya las preventas públicas, podrás realizar Staking
                y Farming, y así podrás ganar más tokens TREFFI que será nuestro
                token de liquidez con el podrás generar más token.
                <br />
              </p>
            </div>
          </div>
        </div>
        <div class="row service-bg">
          <div class="col-lg-6 col-md-6 col-sm-12">
            <div class="dreamit-section-title style-two">
              <h1>Preventa Token Reffi</h1>
              {/* <p class="service-text">Fase Actual: 1</p>
              <p class="service-text">Precio por Reffi: 0.1</p> */}
            </div>
            <div class="about-button2">
              <div class="form-horizontal">
                <fieldset>
                  <div class="form-group" style={{ marginTop: 30 }}>
                    <label class="col-md-8 control-label" for="selectbasic">
                      Selecciona Token:
                    </label>
                    <div class="col-md-8">
                      <select
                        id="selectbasic"
                        name="selectbasic"
                        class="form-control"
                        onChange={(e) => setSelecToken(e.target.value)}
                      >
                        <option value="0x55d398326f99059fF775485246999027B3197955">
                          USDT
                        </option>
                        <option value="0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56">
                          BUSD
                        </option>
                      </select>
                    </div>
                  </div>
                  <div
                    class="form-group"
                    style={{ marginTop: 30, marginBottom: 30 }}
                  >
                    <label class="col-md-8 control-label" for="textinput">
                      Cantidad:
                    </label>
                    <div class="col-md-8">
                      <input
                        id="textinput"
                        name="textinput"
                        type="number"
                        placeholder="0.00"
                        class="form-control input-md"
                        value={Amount}
                        onChange={(e) => setAmount(e.target.value)}
                      />
                    </div>
                  </div>
                </fieldset>
              </div>
              <a href="#!" onClick={() => (Aprove ? AproveToken() : BuyReffi())}>
                {Aprove ? 'Aprobar Token' : `Comprar Reffi`}
              </a>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12">
            <div class="service-single-thumb">
              <div class="service-main-thumb">
                <img src="assets/images/resource/mobile-img.png" alt="" />
              </div>
              <div class="service-thumb-inner bounce-animate3">
                <img src="assets/images/resource/coin.png" alt="" />
              </div>
              <div class="service-thumb-inner1 bounce-animate4">
                <img src="assets/images/resource/half-circle-red.png" alt="" />
              </div>
              <div class="service-thumb-inner2 bounce-animate5">
                <img
                  src="assets/images/resource/half-cirlce-green.png"
                  alt=""
                />
              </div>
              <div class="service-thumb-inner3 bounce-animate">
                <img src="assets/images/resource/crosss-icon.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form
