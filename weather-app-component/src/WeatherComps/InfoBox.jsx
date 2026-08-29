
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

const InfoBox = ({info}) => {
  let dusty_url = "https://images.unsplash.com/photo-1641970304222-b2b332808a4b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
  let hot_url  = "https://media.istockphoto.com/id/824845572/photo/thermometer-sun-high-degres-hot-summer-day-high-summer-temperatures.webp?a=1&b=1&s=612x612&w=0&k=20&c=DPDwtq156djUSKSd57TR23BmU4vzC8xqolwMkqHCdfU="
  let cold_url = "https://images.unsplash.com/photo-1766104718099-b27ed3637335?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29sZCUyMHdlYXRoZXIlMjBpbiUyMGNpdHl8ZW58MHx8MHx8fDA%3D"
  return (
    <Card sx={{ maxWidth: 545 }} className='Card'>
      <CardMedia
        sx={{ height: 140 }}
        image={
          info.temperature > 15 ?info.temperature>25?hot_url:dusty_url : cold_url
        }
        title="green iguana"
      />
      <CardContent>

        <Typography gutterBottom variant="h2" component="div">{info.cityname}</Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <div>Tempearature : {info.temperature}&deg;C</div>
          <div>Humidity : {info.humidity}%</div>
          <div>Wind Speed :{info.windSpeed} km/h</div>
          <div>Pressure : {info.pressure} mb</div>
          <div>Min Temp : {info.minTemp}&deg;C</div>
          <div>Max Temp : {info.maxTemp}&deg;C</div>
          <div>The Weather can be described as <b>{info.description}</b> and feels like <b>{info.feelsLike}&deg;C</b></div>

        </Typography>

      </CardContent>
    </Card>
  )

}

export default InfoBox;
