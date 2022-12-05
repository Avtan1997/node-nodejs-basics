const parseEnv = () => {
  const keys = Object.keys(process.env)
  const result = []
  for (const key of keys){
    if (key.startsWith('RSS_')){
      const value = process.env[key]
      result.push(`${key}=${value};`)
    }
  }
};

parseEnv();
