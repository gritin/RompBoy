import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Slidecol extends Component {


  render() {
    return (
      

      <div id="collection" className="Sllidecol " >
        <div id="carouselExampleIndicators1" class="carousel slide" data-ride="carousel" data-interval="2700" >
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators1" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators1" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators1" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators1" data-slide-to="3"></li>

          </ol>
          <div class="carousel-inner">
          <h1 class="tag carousel-indicators">Rompboy Collection</h1>
            <div class="carousel-item active">
              <img class="d-block w-100  img-banner" src="SHOES.jpg" alt="First slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100 img-banner" src="SKIN.jpg" alt="Second slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100 img-banner" src="x-MAS.jpg" alt="Third slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100 img-banner" src="EDI.jpg" alt="Forth slide" />
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleIndicators1" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators1" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
          <p>
            <button class="btn  carousel-indicators " type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
              <img width="43px" src="down.png" />
            </button>
          </p>
          <div class="collapse " id="collapseExample">
            <div class='container'>
              <div class="aboutbg">
                <div class="card-deck">


                  <div class="container">
                  <div class="row"></div>
                    <div class="row">
                      <div class="col-sm"></div>
                      <div class="col-sm animated zoomIn"><h2 class="headtext" align="center" color="black">Black To Basic</h2></div>
                      <div class="col-sm"></div>                  
                    </div>
                    <div class="row"><h5 class="p-4">คอนเซ็ปต์กลับสู่จุดเริ่มต้นของรองเท้าผ้าใบแฮนด์เมดที่ได้รับแรงบันดาลใจจากรองเท้ากีฬาแบดมินในยุค 1960s มาพร้อมสีสุดคลาสสิคอย่าง ดำและขาว (Vanilla & Charcoal) บวกกับเอกลักษณ์ในการประกอบงานด้วยมืออย่างพิถีพิถันทุกคู่ ที่สำคัญจุดเด่นของแบรนด์นี้คือความละเอียด</h5></div>
                   <div class="row">
                    <div class="col-sm animated zoomIn"><div class="card"><img class="card-img-top" src="black-and-basic.jpg" alt="Card image cap" /></div>
                    </div>
                    
                    <div class="col-sm animated zoomIn"><div class="card"><img class="card-img-top" src="brick (1).jpg " alt="Card image cap" /></div></div>
                    <div class="col-sm"></div>
                  </div>   
                <div class="row"></div>
                
                </div>
                <div class="container">
                  <div class="row">
                    <div class="col-sm"></div>
                    <div class="col-sm animated zoomIn"><h2 class="headtext" align="center" color="black">Color Edition</h2></div>
                    <div class="col-sm"></div>
                  </div>
                  <div class="row"><h5 class="p-4">รองเท้าสีสุดพิเศษให้กับผู้ชื่นชอบรองเท้ารูปทรงย้อนยุคด้วยสามสีสุดพิเศษ - Military (สีเขียวทหาร) - Mustard (สีเหลืองมัสตาร์ด) - Ivory (สีขาวงาช้าง)</h5></div>
                
                  <div class="row">
                    <div class="col-sm animated zoomIn">
                      <div class="card">
                        <img class="card-img-top " src="11.jpg" alt="Card image cap" />
                      </div>
                    </div>
                    <div class="col-sm animated zoomIn">
                      <div class="card">
                        <img class="card-img-top" src="brick.jpg" alt="Card image cap" />
                      </div>
                    </div>
                    <div class="col-sm animated zoomIn">
                      <div class="card">
                        <img class="card-img-top" src="co.jpg" alt="Card image cap" />
                      </div>
                    </div>
                  </div>
                
                <div class="row"></div>
                </div>
                <div class="container">
                  <div class="row">
                    <div class="col-sm"></div>
                    <div class="col-sm animated zoomIn">
                      <h2 class="headtext" align="center" color="black">Skin</h2>
                    </div>
                    <div class="col-sm"> </div>
                  </div> 
                  <div class="row"><h5 class="p-4">การตกผลึกในเรื่องของการออกแบบทั้งรูปทรงและดีไซน์ รวมถึงการผสมสียางการเลือกฟอกสีหนังวัวแท้หลายขั้นตอน เพื่อให้ได้ออกมาเป็นสีที่ใกล้เคียงกับสีผิวของคนเอเชียที่สุด กับการทำรองเท้าที่ "ธรรมดาที่สุดแต่สมบูรณ์แบบที่สุด” ตาม concept "Simple is the best”</h5></div>     
                  <div class="row">
                    <div class="col-sm animated zoomIn">
                      <div class="card">
                        <img class="card-img-top" src="skin1.jpg" alt="Card image cap" />
                      </div>
                    </div>
                    <div class="col-sm">
                    </div>
                    <div class="col-sm">
                    </div>
                  </div>
                  <div class="row">
                  </div>
                </div>

                <div class="container">
                  <div class="row">
                    <div class="col-sm">
                    </div>
                    <div class="col-sm animated zoomIn">
                      <h2 class="headtext" align="center" color="black">X Mas</h2>
                    </div>
                    <div class="col-sm">
                    </div>
                  </div>
               
                  <div class="row">
                  <h5 class="p-4">
                  รองเท้าผ้าใบทรง Court วิธีการประกอบงานแบบ handmade ย้อนยุค ที่เอาโมเดลรองเท้าแบดมินตันปี 1960 มาปรับโฉมใหม่ เพิ่มให้รองเท้ามีมิติ มี texture มากขึ้น เพิ่มสี Outsole เป็นสี matching upper และเพิ่มสีใหม่ผ้าใบใหม่ถึง 10 สี สวยขึ้น สนุกขึ้น มีสีสันมากกว่าเดิม
                  </h5>
               </div>
                  <div class="row">
                    <div class="col-sm animated zoomIn">
                      <div class="card">
                        <img class="card-img-top" src="brick2.jpg" alt="Card image cap" />
                      </div>
                    </div>
                    <div class="col-sm animated zoomIn">
                      <div class="card">
                        <img class="card-img-top" src="cookie-and-cream.jpg" alt="Card image cap" />
                      </div>
                    </div>
                    <div class="col-sm animated zoomIn">
                      <div class="card">
                        <img class="card-img-top" src="double-black.jpg" alt="Card image cap" />
                      </div>
                    </div>
                    </div>
                    <div class="row">
                    </div>
                    <div class="row">
                    <div class="col-sm animated zoomIn">
                      <div class="card">
                        <img class="card-img-top" src="dusty-pink.jpg" alt="Card image cap" />
                      </div>
                    </div>
                    <div class="col-sm animated zoomIn">
                      <div class="card">
                        <img class="card-img-top" src="igkv-13-0.jpg" alt="Card image cap" />
                      </div>
                    </div>
                    <div class="col-sm animated zoomIn">
                      <div class="card">
                        <img class="card-img-top" src="leaf.jpg" alt="Card image cap" />
                      </div>
                    </div>
                    </div>
                    <div class="row"></div>
                    <div class="row">
                    <div class="col-sm animated zoomIn">
                      <div class="card">
                        <img class="card-img-top" src="maroon.jpg" alt="Card image cap" />
                      </div>
                    </div>
                    <div class="col-sm animated zoomIn">
                      <div class="card">
                        <img class="card-img-top" src="off-white.jpg" alt="Card image cap" />
                      </div>
                    </div>
                    <div class="col-sm animated zoomIn">
                      <div class="card">
                        <img class="card-img-top" src="sun-flower.jpg" alt="Card image cap" />
                      </div>
                    </div>
                    </div>
                    <div class="row"> </div>
                    <div class="row">
                    <div class="col-sm animated zoomIn">
                      <div class="card">
                        <img class="card-img-top" src="triple-navy.jpg" alt="Card image cap" />
                      </div>
                    </div>
                    <div class="col-sm">
                      
                    </div>
                    <div class="col-sm">
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>

        </div>
        );



  }
}



export default Slidecol;
