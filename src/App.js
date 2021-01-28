import React, { Component } from 'react'
import './App.css'
import Alert from './Components/Alert'
import Media from './Components/Media'

class App extends Component {
  constructor(){
    super();
    this.state={
      type:"danger",
      header:"Fatal Error",
      content: "ini content dari alert"
    }
  }
  changeTypeAlert=(event)=>{
    this.setState({type:event.target.value})
  }
  changeHeaderAlert=(event)=>{
    this.setState({header:event.target.value})
  }
  changeContentAlert=(event)=>{
    this.setState({content:event.target.value})
  }
  render() {
    return (
      <div>
      <div className="App container">
        <div className="alert alert-info">
          <h3 className="text-danger">Ini project pertama React JS</h3>
          <p>Belajar React JS itu mudah</p>
          <button className="mr-1 btn btn-success">Setuju</button>
          <button className="btn btn-info">Iya Dong</button>
        </div>
      </div>
      <br/>
      <div className="App container col-sm-6">
        <Alert type="danger" header="Fatal Error">
          Ini adalah alert dengan tipe danger
        </Alert>
        <Alert type="success" header="Berhasil">
          Ini adalah alert dengan tipe success
        </Alert>
        <Alert type="warning" header="Warning">
          Ini adalah alert dengan tipe warning
        </Alert>
      </div>
      <br/>
      <div>
      <div className="App container col-sm-6">
        <div className="App">
          <br></br>
          <h1 className="judul">My boys !</h1>
          <br></br>
        <Media image="nanon korapat.jpg" title="พี่ Nanon">
        Nanon Korapat Kirdpan,
        lahir pada 18 Desember 2000, di usia yang masih sangat muda, 
        ia telah berhasil membintangi beberapa series populer.
        selain hobi berakting ia mempunyai suara yang merdu ,
        serta ia juga mahasiswa Srinakharinwirot University yang tak jarang membuat kaum hawa berhalu tentangnya
        </Media>
        <br/>
        <Media image="mas apon.jpg" title="พี่ Apon">
        Tanapon Sukumpantanasan, 
        lahir pada 20 Maret 2001.panggilan akrabnya Perth, adalah seorang penyanyi dan aktor Thailand. 
        Dia menjadi terkenal dengan memerankan Ae in Love by Chance.Sibuk di dunia hiburan gak bikin ia melalaikan pendidikan.
        Perth merupakan alumni Saint Dominic School, Bangkok. kini,ia tengah menempuh pendidikan sarjana di Srinakharinwirot University
        dan mengambil jurusan Innovative Media Arts dan Acting and Director Training.
        </Media>
        <br/>
        <Media image="tay tawan.jpg" title="อ้อม tawan">
        Tawan Vihokratana,
      lahir 20 Juli 1991 adalah seorang pemeran, peraga busana dan vlogger perjalanan asal Thailand.
      ia sangat pandai dalam bidang fotografi,sering kali hasil jepretannya masuk di feeds sesama teman actornya seperti off jumpol.
      ia juga memiliki banyak pengetahuan tentang bahan makanan sehat.meski sudah om-om,tetapi om yang satu ini masih bisa dipertimbangkan(:
        </Media>
      </div>
      <br/>
      <div>
        </div>
        </div>
        <Alert type={this.state.type} header={this.state.header}>
          {this.state.content}
        </Alert>
        <hr/>
        <h4>Alert Control</h4>
        <b className="text-left">Tipe Alert</b>
        <select className="form-control" name="type" value={this.state.type} onChange={this.changeTypeAlert}>
          <option value="success">Success</option>
          <option value="warning">Warning</option>
          <option value="danger">Danger</option>
          <option value="info">Info</option>
        </select>
        <b className="text-left">Header Alert</b>
        <input type="text"name="header" className="form-control" value={this.state.header} onChange={this.changeHeaderAlert}/>
        <b className="text-left">Content Alert</b>
        <input type="text" name="content" className="form-control" value={this.state.content} onChange={this.changeContentAlert}/>
      </div>
      </div>
    )
  }
}

export default App;