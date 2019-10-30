if(process.env.DEV_ENV === 'true') {
  require('@babel/register')({
    extensions: ['.js', '.jsx']
  })

  require('./src/app')
} else {
  require('./lib/app')
}

