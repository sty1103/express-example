import dotenv from 'dotenv'
import path from 'path';

if (process.env.NODE_ENV === 'production') {
  dotenv.config({ path: path.resolve('.env.production') })
} else if (process.env.NODE_ENV === 'development') {
  dotenv.config({ path: path.resolve('.env.development') })
} else {
  dotenv.config({ path: path.resolve('.env.local') })
}