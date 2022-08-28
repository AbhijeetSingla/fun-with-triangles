import tableFlip from '../media/gifs/tableflip_space.gif';

function Error404() {
    document.title = "CrispyFixes | 404";
    return ( 
        <div className="container-center">
            <h1>Error 404</h1>
            <img src={tableFlip} alt="table yeeted to space" width="100%" />
        </div>
     );
}

export default Error404;