# Lab5-Web
¿Qué significa className en React?
En HTML normal usamos class="..." para dar estilos con CSS, en React no podemos usar la palabra class 
porque choca con la palabra reservada de JavaScript. Por eso usamos className, que es lo mismo que class, 
solo que React lo entiende así, className="titulo" en React funciona igual que class="titulo" en HTML.

¿Las props tienen un límite?
No tienen un límite máximo fijo, podemos mandar tantas props como queramos a un componente, lo importante 
es no exagerar: si un componente tiene demasiadas props se vuelve mas complicado de entender.

¿Quién define las props?
Las define la persona que crea el componente. El creador del componente dice cuáles existen, y el que usa el componente les pone los valores.


