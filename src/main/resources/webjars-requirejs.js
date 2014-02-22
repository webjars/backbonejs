requirejs.config({
    paths: { "backbonejs": webjars.path("backbonejs", "backbone") },
    shim: { "backbonejs": [ "underscorejs" ] }
});
