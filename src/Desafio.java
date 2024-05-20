import java.util.Scanner;

public class Desafio {
    public static void main(String[] args) {
        String nombreCliente = "Carlos Hidalgo";
        String tipoCuenta = "Nomina";
        double saldoCliente = 1500;
        int opcion = 0;

        System.out.println("*****************************");
        System.out.println("\nNombre del cliente:"+nombreCliente);
        System.out.println("\nEl tipo de cuenta es:"+tipoCuenta);
        System.out.println("\nSu saldo disponible:"+saldoCliente);

        String menuPrincipal = """
                ***Escriba el numero de la opcion deseada***
                1 - Consultar saldo
                2 - Retirar
                3 - Depositar
                9 - Salir
                """;

        Scanner teclado = new Scanner(System.in);
        while(opcion != 9)
        {
            System.out.println(menuPrincipal);
            opcion = teclado.nextInt();

            switch (opcion){
                case 1:
                    System.out.println("el Saldo actualizado es:"+saldoCliente);
                    break;
                case 2:
                    System.out.println("¿Cual es el valor a retirar?");
                    double saldoRetirar = teclado.nextDouble();
                    if(saldoCliente <= saldoRetirar ) {
                        System.out.println("Saldo insuficiente");
                    }else {
                        saldoCliente = saldoCliente - saldoRetirar;
                        System.out.println("EL saldo actualizado es:"+saldoCliente);
                    }
                    break;
                case 3:
                    System.out.println("¿Cual es el monto a depositar:");
                    double saldoDeposito = teclado.nextDouble();
                    saldoCliente += saldoDeposito;
                    System.out.println("EL saldo actualizado es:"+saldoCliente);
                    break;
                case 9:
                    System.out.println("Saliendo del programa,gracias por utilizar nuestro servicio.");
                    break;
                default:
                    System.out.println("Opcion no valida");
            }
        }
    }
}
