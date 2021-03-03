# useFetch

Este hook recibe una url string para realizar la peticion fetch regresando el estado.

```
    const { state } = useFetch( url );
```

El estado regresado:

```
    // En caso de peticion exitosa:
    {
        data,
        loading: false,
        error: null,
    }

    // en caso de error:
    {
        data: null,
        loading: false,
        error: 'No se encontro ningun dato en esta url',
    }
```