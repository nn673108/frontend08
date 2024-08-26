import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
     <div className="container-fluid">
       <a className="navbar-brand" href="#">Nalfiz</a>
       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon" />
       </button>
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
           <li className="nav-item">
             <a className="nav-link active" aria-current="./" href="home">Home</a>
           </li>
           <li className="nav-item">
             <a className="nav-link active" href="about" target="blank">About</a>
           </li>
           <li className="nav-item">
             <a className="nav-link active" href="servic" target="blank">Servic</a>
           </li>
           <li className="nav-item">
             <a className="nav-link active" aria-current="./" href="contract" target="blank">Contact </a>
           </li>
         </ul>
         <form className="d-flex" role="search">
           <Link href="signup" className="btn btn-outline-success" type="submit">Sign Up</Link>&nbsp;
           <Link href="signin" className="btn btn-outline-success" type="submit">Sign In</Link>&nbsp;
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
         <img src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/04/jujutsu-kaisen-season-2-key-visual.jpg" className="d-block w-100" alt="..." />
       </div>
       <div className="carousel-item">
         <img src="https://p325k7wa.twic.pics/high/jujutsu-kaisen/jujutsu-kaisen-cursed-clash/00-page-setup/JJK-header-mobile2.jpg?twic=v1/resize=760/step=10/quality=80" className="d-block w-100" alt="..." />
       </div>
       <div className="carousel-item">
         <img src="https://t3.ftcdn.net/jpg/02/35/78/96/360_F_235789662_9tKzoDqDUHh6ctZQ2pSWFTKnuBuZmBwl.jpg" className="d-block w-100" alt="..." />
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
              <img src="https://p325k7wa.twic.pics/high/jujutsu-kaisen/jujutsu-kaisen-cursed-clash/00-page-setup/JJK-header-mobile2.jpg?twic=v1/resize=760/step=10/quality=80" className="card-img-top" alt="..." />
                 <div className="card-body">
                   <h5 className="card-title">Card title</h5>
                     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                       <a href="#" className="btn btn-primary">Go somewhere</a>
         </div>
             </div>
                 </div>
         <div className="col-4 text center" >
             <div className="card" style={{width: '34rem'}}>
               <img src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/01/maki-gojo-satoru-yuta-protagonist-jujutsu-kaisen-jjk.JPG" className="card-img-top" alt="..." />
                 <div className="card-body">
                   <h5 className="card-title">Card title</h5>
                     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                       <a href="#" className="btn btn-primary">Go somewhere</a>
         </div>
             </div>
                 </div>
         <div className="col-4 text center" >
             <div className="card" style={{width: '34rem'}}>
               <img src="https://preview.redd.it/nhcopqm3hjz71.png?width=640&crop=smart&auto=webp&s=f51023ed94f7db60ececeb7a0bafaba3680e6d18" className="card-img-top" alt="..." />
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