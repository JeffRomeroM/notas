import { useEffect, useState } from "react";
import { getGastronomies, getMusics } from "../../api/gastronomies.api";
import '../../styles/cards.css'
import '../../styles/Table.css'
import { Card, CardActions, CardContent,  Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Musics } from "./music.interfaces";

export const MusicList = () => {
  const [musics, setMusics] = useState<Musics[]>([]);
  

  const fetchMusics = async () => {
    const musics = await getMusics();
    setMusics(musics);
  };

  useEffect(() => {
    fetchMusics();
  }, []);


  // if (gastronomies.length === 0) {
  //   return <h2>No hay eventos sobre musica</h2>;
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
        
        {musics.map((music: any) => {
        return (
          <div key={music.id} style={styles.productItemStyle}>

            <Card sx={{ maxWidth: 345 }} key={music.id} className="card">

              <CardContent>
                
                <Typography gutterBottom variant="h5" component="div" >
                  {music.name}
                </Typography>
                <img src={`${music.image}`}
                srcSet={`${music.image}`}
                 className="imagen-card"/>


                <p> {music.description}</p>


                <Typography variant="h5" component="h2">
                   {music.place}
                </Typography>

                <Typography variant="h5" component="h2">
                   {music.date}
                </Typography>

                <Typography variant="h5" component="h2">
                   {music.time}
                </Typography>
                
                

              </CardContent>
              <CardActions>
                
                <Link to={`/musicas/`} style={styles.button}>Asistir</Link>
                
            
                
              </CardActions>
              
            </Card>

          </div>

        );
      })}
      </div>
    </div>
  );
};
