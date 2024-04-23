import com.misitio.clase.Pelicula;
import com.misitio.clase.Titulo;

public class Principal {
    public static void main(String[] args) {
        Titulo miPeli = new Titulo();
        miPeli.setNombre("Harry Potter");
        miPeli.setDuracionPelicula(120);
        miPeli.setFechaLanzamiento(2021);

        miPeli.evaluacion(10);
        miPeli.evaluacion(10);
        miPeli.evaluacion(9);

        miPeli.muestraFichaTecnica();
        System.out.println(miPeli.calcularMedia());
    }
}
