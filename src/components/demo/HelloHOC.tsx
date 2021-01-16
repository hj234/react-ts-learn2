import React, { Component } from 'react'

import HelloClass from './HelloClass'

interface Loading {
  loading: boolean
}

function HelloHOC<P>(WarppedComponent: React.ComponentType<P>) {
  return class extends Component<P & Loading> {
    render() {
      const { loading, ...props } = this.props
      return loading ? <div>loading...</div> : <WarppedComponent {...props as P}></WarppedComponent>
    }
  }
}

export default HelloHOC(HelloClass)