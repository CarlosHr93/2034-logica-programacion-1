import com.misitio.clase.Pelicula;
import com.misitio.clase.Serie;

public class Principal {
    public static void main(String[] args) {
        Pelicula miPeli = new Pelicula();
        miPeli.setNombre("Harry Potter");
        miPeli.setDuracion(120);
        miPeli.setFechaLanzamiento(2021);

        miPeli.evaluacion(10);
        miPeli.evaluacion(10);
        miPeli.evaluacion(9);

        miPeli.muestraFichaTecnica();
        System.out.println(miPeli.calcularMedia());


        Serie miSerie = new Serie();
        miSerie.setNombre("Stringer things");
        miSerie.setFechaLanzamiento(2021);
        miSerie.setNumerotemporadas(3);
        miSerie.setEpisodiosTemporada(15);
        miSerie.setDuracionEpisodio(50);


        miSerie.evaluacion(9);
        miSerie.evaluacion(9);
        miSerie.evaluacion(9);
        miSerie.muestraFichaTecnica();
        System.out.println(miSerie.calcularMedia());
        System.out.println(miSerie.getDuracion());
    }
}
