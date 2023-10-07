import { useEffect, useState } from "react";
import { getGastronomies } from "../../api/gastronomies.api";
import { Gastronomy } from "./gastronomy.interfaces";
import '../../styles/cards.css'
import '../../styles/Table.css'
import { Card, CardActions, CardContent,  Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const GastronomyList = () => {
  const [gastronomies, setGastronomies] = useState<Gastronomy[]>([]);
  

  const fetchGastronomies = async () => {
    const gastronomies = await getGastronomies();
    setGastronomies(gastronomies);
  };

  useEffect(() => {
    fetchGastronomies();
  }, []);


  // if (gastronomies.length === 0) {
  //   return <h2>No hay eventos sobre gasgtronomia</h2>;
  // }
 

  const styles = {
    productsStyle: {
      color: 'white',
      padding: '5px',
      display: 'flex',
      flexWrap: 'wrap',
      width: '100%',
    },
  
    titleProducts: {
      width: '100%',
      textAlign: 'center'
    },
    productItemStyle: {
      width: '32%',
      margin: 'auto',
      textAlign: 'center',
      marginTop: '20px',
      borderRadius: '20px'
      
    },
    
    button: {
      color: 'black',
      textDecoration: 'none',
      margin: '10px 36%', 
      padding: '0px 15px',
      fontSize: '20px',
      border: '2px solid black',
      borderRadius: '6px'
    }
  }
  return (
    <div style={styles.productsStyle}>

      

      <div style={styles.productsStyle}>
        <h1 className="containerT-title">Eventos relacionados a la gastronomía</h1>
        
        {gastronomies.map((gastronomy: any) => {
        return (
          <div key={gastronomy.id} style={styles.productItemStyle}>

            <Card sx={{ maxWidth: 345 }} key={gastronomy.id} className="card">

              <CardContent>
                
                <Typography gutterBottom variant="h5" component="div" >
                  {gastronomy.name}
                </Typography>


                <p> {gastronomy.description}</p>

                <Typography variant="h5" component="h2">
                   {gastronomy.planner}
                </Typography>

                <Typography variant="h5" component="h2">
                   {gastronomy.place}
                </Typography>

                <Typography variant="h5" component="h2">
                   {gastronomy.date}
                </Typography>

                <Typography variant="h5" component="h2">
                   {gastronomy.time}
                </Typography>
                
                

              </CardContent>
              <CardActions style={{background: gastronomy.color}}>
                
                <Link to={`/gastronomias/`} style={styles.button}>Asistir</Link>
                
            
                
              </CardActions>
              
            </Card>

          </div>

        );
      })}
      </div>
    </div>
  );
};
