import './index.css'

const AppItem = (props) =>{

  const {appDetails} = props;
  const { appName, imageUrl, category} = appDetails;

  return(
    <li className="app-card">
      <img src={imageUrl} alt={category} className= "app-image"/>
      <p className="app-name">{appName}</p>
    </li>
  )
  
}

export default AppItem;