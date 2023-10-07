import { useEffect, useState } from "react";
import { getGastronomies, getSports } from "../../api/gastronomies.api";
import { Sport } from "./sport.interfaces";
import '../../styles/cards.css'
import '../../styles/Table.css'
import { Card, CardActions, CardContent,  Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const SportList = () => {
  const [sports, setSports] = useState<Sport[]>([]);
  

  const fetchSports = async () => {
    const sports = await getSports();
    setSports(sports);
  };

  useEffect(() => {
    fetchSports();
  }, []);


 

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
        
        {sports.map((sport: any) => {
        return (
          <div key={sport.id} style={styles.productItemStyle}>

            <Card sx={{ maxWidth: 345 }} key={sport.id} className="card">

              <CardContent>
                
                <Typography gutterBottom variant="h5" component="div" >
                  {sport.name}
                </Typography>


                <p> {sport.description}</p>

                <img src={`${sport.image}`}
                srcSet={`${sport.image}`}
                 className="imagen-card"/>

                <Typography variant="h5" component="h2">
                   Lugar: {sport.place}
                </Typography>

                <Typography variant="h5" component="h2">
                   Fecha: {sport.date}
                </Typography>

                <Typography variant="h5" component="h2">
                   Hora: {sport.time}
                </Typography>
                
                

              </CardContent>
              <CardActions>
                
                <Link to={`/deportes/`} style={styles.button}>Asistir</Link>
                
            
                
              </CardActions>
              
            </Card>

          </div>

        );
      })}
      </div>
    </div>
  );
};
