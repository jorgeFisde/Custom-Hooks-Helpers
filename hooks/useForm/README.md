# useForm

Este hook recibe un objeto con los siguientes datos:

```
    {
        [ input.name ] : [ input.value ],
    }
```

Lo declaramos así:

```
    const { values, handleInputChange, reset, } = useForm( {
        [ input.name ] : [ input.value ],
    });
```