import Footer_component from "./footer_component";
import './style/footer.css'
const column1 = [
    "Help Center",
    "AirCover",
    "Anti-discrimination",
  ];
  
  const column2 = [
    "latest movies",
    "series",
    "Community forum",
   
  ];
  
  const column3 = [
    "Newsroom",
    "New features",
    "Investors",
    "Gift cards",
  ];
  
function Footer()
{

return (
<>
<div id="footerInfoContainer">
    <Footer_component title="Support"  data={column1}/>
    <Footer_component title="hosting" data={column2}/>
    <Footer_component title="Oppartunities" data={column3}/>
</div>


</>
)
}


export default Footer;