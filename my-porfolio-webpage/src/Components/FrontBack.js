import "../CSS/FrontBack.css";

const FrontStackObjects = [
  {id:'HTML5' , filename: 'html5', },
  {id:'CSS3', filename: 'css3'},
  {id:'JavaScript', filename: 'javascript'},
  {id:'React', filename: 'react'}
];
const BackStackObject = [];

function FrontBack() {
  return (
    <div id="front-back" className="w-full flex">
      <div className="front w-6/12">
        <h1 className="sm:text-4xl lg:text-5xl  text-center">FrontEnd</h1>
        <div className="stack-container flex">
          {
            FrontStackObjects.map((stack)=>{
              return(
                <div className="front-stack slideUp-wrapper">
                  <img width={'80%'} src={`/img/logo/stack-icon/${stack.filename}.svg`} alt="" />
                  <p>{stack.id}</p>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="back w-6/12">
        <h1 className="sm:text-4xl lg:text-5xl text-center">BackEnd</h1>
        <div className="back-stack"></div>
      </div>
    </div>
  );
}

export default FrontBack;
