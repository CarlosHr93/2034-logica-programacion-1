package com.misitio.calculador;

import com.misitio.clase.Pelicula;
import com.misitio.clase.Titulo;

public class CalculadorDuracion {
private int tiempoTotal;

public void incluye(Titulo titulo) {
    tiempoTotal += titulo.getDuracion();
    }

    public int getTiempoTotal() {
        return tiempoTotal;
    }
}