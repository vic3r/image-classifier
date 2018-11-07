import React from 'react'
import { Link } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <h1 align = "center">Magnolias frutos</h1>
    <h4 align = "center">Etiqueta cada imagen</h4>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem',}}>
      <Image />
    </div>
    <button type="button" class="btn btn-success">Si</button>
    <button type="button" class="btn btn-sm btn-danger">No</button>
      
    
  </Layout>
)

export default IndexPage
