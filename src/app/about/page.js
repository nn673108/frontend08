import Image from "next/image";
import styles from "./page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
     <div className="container-fluid">
       <a className="navbar-brand" href="#">Logo</a>
       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon" />
       </button>
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
           <li className="nav-item">
             <a className="nav-link active" aria-current="page" href="/">Home</a>
           </li>
           <li className="nav-item">
             <a className="nav-link" href="about"></a>
           </li>
           <li className="nav-item">
             <a className="nav-link" href="Servic">Servic </a>
           </li>
           <li className="nav-item">
             <a className="nav-link active" aria-current="page" href="" target="blank">Contact </a>
           </li>
         </ul>
         <form className="d-flex" role="search">
           <button className="btn btn-outline-success" type="submit">Sing In</button>
           <button className="btn btn-outline-success" type="submit">Sing</button>
         </form>
       </div>
     </div>
   </nav>
   <div id="carouselExampleIndicators" className="carousel slide">
     <div className="carousel-indicators">
       <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
       <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
       <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
     </div>
     <div className="carousel-inner">
       <div className="carousel-item active">
         <img src="https://lh5.googleusercontent.com/obCPpguxfpMCiEcvM-v87EWvdHZMTKKYbiG9uXoxJkXpt0uTX06LhjB7WTGj4CFQex3EsPotF9Yhx5g-qk1_6uo1TthWzO0kITFiI1jEoQ-8bv3HwKuff-85UI2AwFZJzMeWVgau" className="d-block w-100" alt="..." />
       </div>
       <div className="carousel-item">
         <img src="https://lh3.googleusercontent.com/B7JsctmG1orydjnB3FYdqnywMTvHnndAfPh_IbJ64V3mlZyP7HE7GtDUAcCz2LGUyW4Hp2zf7tsa2AFTcMeuWV9CUDPcawfxI1i8ASuxG-P7MWXnNqkRnah0R-aj8U5o-fbD3O44" className="d-block w-100" alt="..." />
       </div>
       <div className="carousel-item">
         <img src="https://lh6.googleusercontent.com/27187i5uRLOMykJFxIacCPDLWadJWVgyF3BIQ2iWHN9LhfKY7zPrJTabQesCKAOY9nTJR9dQ3v6B9uKuNrfM3ut10zm8Ni1wYWiti44i3p8_JVwtOd9hrh2r74SbWQweuoZ7eLZ_" className="d-block w-100" alt="..." />
       </div>
     </div>
     <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
       <span className="carousel-control-prev-icon" aria-hidden="true" />
       <span className="visually-hidden">Previous</span>
     </button>
     <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
       <span className="carousel-control-next-icon" aria-hidden="true" />
       <span className="visually-hidden">Next</span>
     </button>
   </div>
   <br></br>
   <div className="row">
         <div className="col-4 text center" >
             <div className="card" style={{width: '34rem'}}>
              <img src="https://lh6.googleusercontent.com/27187i5uRLOMykJFxIacCPDLWadJWVgyF3BIQ2iWHN9LhfKY7zPrJTabQesCKAOY9nTJR9dQ3v6B9uKuNrfM3ut10zm8Ni1wYWiti44i3p8_JVwtOd9hrh2r74SbWQweuoZ7eLZ_" className="card-img-top" alt="..." />
                 <div className="card-body">
                   <h5 className="card-title">Card title</h5>
                     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                       <a href="#" className="btn btn-primary">Go somewhere</a>
         </div>
             </div>
                 </div>
         <div className="col-4 text center" >
             <div className="card" style={{width: '34rem'}}>
               <img src="https://lh5.googleusercontent.com/obCPpguxfpMCiEcvM-v87EWvdHZMTKKYbiG9uXoxJkXpt0uTX06LhjB7WTGj4CFQex3EsPotF9Yhx5g-qk1_6uo1TthWzO0kITFiI1jEoQ-8bv3HwKuff-85UI2AwFZJzMeWVgau" className="card-img-top" alt="..." />
                 <div className="card-body">
                   <h5 className="card-title">Card title</h5>
                     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                       <a href="#" className="btn btn-primary">Go somewhere</a>
         </div>
             </div>
                 </div>
         <div className="col-4 text center" >
             <div className="card" style={{width: '34rem'}}>
               <img src="https://lh6.googleusercontent.com/3rp0_0vmWVdq9NDSBKvaXYY0SO1C3FPFfY0boqJacyqYWYdN_7NHHip5_Rt_xIxtJxjuoS3LV28mELgJUjItdrzz7Po6pruZwnteMq8f-3blnZDEUIqpxLdhA74ZF_C_YH8dGZEy" className="card-img-top" alt="..." />
                 <div className="card-body">
                   <h5 className="card-title">Card title</h5>
                     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                       <a href="#" className="btn btn-primary">Go somewhere</a>
         </div>
             </div>
                 </div>
      <div className="container">
     <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
       <div className="col-md-4 d-flex align-items-center">
         <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
           <svg className="bi" width={30} height={24}><use xlinkHref="#bootstrap" /></svg>
         </a>
         <span className="mb-3 mb-md-0 text-body-secondary">Â© 2024 Company, Inc</span>
       </div>
       <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
         <li className="ms-3"><a className="text-body-secondary" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#twitter" /></svg></a></li>
         <li className="ms-3"><a className="text-body-secondary" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#instagram" /></svg></a></li>
         <li className="ms-3"><a className="text-body-secondary" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#facebook" /></svg></a></li>
       </ul>
     </footer>
   </div>
   
   </div>
      
   </>
     );
   }