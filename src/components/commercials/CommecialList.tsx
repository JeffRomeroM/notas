import { useEffect, useState } from "react";
import { getCommercials } from "../../api/gastronomies.api";
import { Commercial } from "./commercial.interfaces";
import '../../styles/Table.css'
import { Card, CardActions, CardContent,  Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const CommercialList = () => {
  const [commercials, setCommercials] = useState<Commercial[]>([]);

  const fetchCommercials = async () => {
    const commercials = await getCommercials();
    setCommercials(commercials);
  };

  useEffect(() => {
    fetchCommercials();
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
        
        {commercials.map((Commercial: any) => {
        return (
          <div key={Commercial.id} style={styles.productItemStyle}>

            <Card sx={{ maxWidth: 345 }} key={Commercial.id} className="card">

              <CardContent >
                
                <Typography gutterBottom variant="h5" component="div" className="contenido">
                  {Commercial.title}
                </Typography>

                <img src={`${Commercial.image}`}
                srcSet={`${Commercial.image}`}
                 className="imagen-card"/>
                <p> {Commercial.owner}</p>

                <Typography variant="h5" component="h2">
                   {Commercial.planner}
                </Typography>

                <Typography variant="h5" component="h2">
                   {Commercial.message}
                </Typography>

                <Typography variant="h5" component="h2">Lugar: {Commercial.place}
                </Typography>

                <Typography variant="h5" component="h2">
                  Fecha: {Commercial.date}
                </Typography>

                <Typography variant="h5" component="h2">
                   {Commercial.callAction}
                </Typography>
                
                

              </CardContent>
             
              
            </Card>

          </div>

        );
      })}
      </div>
    </div>
  );
};
