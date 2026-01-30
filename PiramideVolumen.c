#include <stdio.h>

int main(){
 int Definición_Calculo_Base_piramide;
 int altura_piramide;
 double Volumen_piramide;

    printf("Porfavor seleccione de que tipo es la piramide de la cual desde calcular su volumen: \n");
    printf("1.Base Cuadrada \n");
    printf("2.Base Triangular \n");
    printf("3.Base Rectangular \n");
    scanf ("%d",&Definición_Calculo_Base_piramide);

    switch (Definición_Calculo_Base_piramide)
    {
    case 1:
    int lado_base_cuadrada;
    printf("Ingrese la medida de uno de los lados de la base cuadrada: \n");
    scanf("%d", &lado_base_cuadrada);
    printf("Ingrese el valor de la altura de la piramide: \n");
    scanf("%d", &altura_piramide);
    Volumen_piramide = ((lado_base_cuadrada * lado_base_cuadrada)*altura_piramide)/3.0;
    printf("El volumen de su piramide es: %lf\n",Volumen_piramide);
        break;
    case 2:
    int medida_base_triangulo;
    int medida_altura_triangulo;
    printf("Ingrese la medida de la base del triangulo en la base de la piramide: \n");
    scanf("%d", &medida_base_triangulo);
    printf("Ingrese la medida de la altura del triangulo en la base de la piramide: \n");
    scanf("%d", &medida_altura_triangulo);
    printf("Ingrese el valor de la altura de la piramide: \n");
    scanf("%d", &altura_piramide);
    Volumen_piramide = (((medida_base_triangulo * medida_altura_triangulo)/2.0)*altura_piramide)/3.0;
    printf("El volumen de su piramide es: %lf\n",Volumen_piramide);
        break;
    case 3:
    int medida_base_rectangulo;
    int medida_altura_rectangulo;
    printf("Ingrese la medida de la base del rectangulo en la base de la piramide: \n");
    scanf("%d", &medida_base_rectangulo);
    printf("Ingrese la medida de la altura del rectangulo en la base de la piramide: \n");
    scanf("%d", &medida_altura_rectangulo);
    printf("Ingrese el valor de la altura de la piramide: \n");
    scanf("%d", &altura_piramide);
    Volumen_piramide = ((medida_base_rectangulo * medida_altura_rectangulo)*altura_piramide)/3.0;
    printf("El volumen de su piramide es: %lf\n",Volumen_piramide);
        break;

    default:
    printf("Esta opcion para la medición de su piramide no está disponible \n");
        break;
    }
     
}
