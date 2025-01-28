const projects = [
    {
        name: "Serverly",
        lang: "nim",
        url: "https://roger-padrell.github.io/serverly/",
        desc: "Serverly is a dependency-less, simple HTTP serving library in nim.",
        code: `import serverly
var rout: Router = initRouter();

rout.get("/", proc(req: Request, res: Response) = 
    res.send("Hello world")
)

rout.start(8000)`
    }
]