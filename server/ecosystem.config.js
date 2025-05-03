

module.exports = {
    apps: [
        {
            name:"stay-desh",
            script: "npm",
            args: "run dev",
            env:{
                NODE_ENV: "development",
                
            }
        }
    ]
}