package com.misitio.clase;

public class Titulo {
    private String nombre;
    int fechaLanzamiento;
    int duracionPelicula;
    double valoracionUsuario;
    int totalValoraciones;

    public void muestraFichaTecnica(){
        System.out.println("El nombre de la pelicula"+nombre);
        System.out.println("La fecha de lanzamiento es:"+fechaLanzamiento);
        System.out.println("Duracion de la pelicula es:"+duracionPelicula);

    }

    public void evaluacion(double valorSumando){
        valoracionUsuario += valorSumando;
        totalValoraciones ++;
    }

    public double calcularMedia(){
        return valoracionUsuario/totalValoraciones ;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getNombre() {
        return nombre;
    }

    public int getFechaLanzamiento(int fechaLanzamiento) {
        return fechaLanzamiento;
    }

    public void setFechaLanzamiento(int fechaLanzamiento) {
        this.fechaLanzamiento = fechaLanzamiento;
    }

    public int getDuracionPelicula() {
        return duracionPelicula;
    }

    public void setDuracionPelicula(int duracionPelicula) {
        this.duracionPelicula = duracionPelicula;
    }
}
