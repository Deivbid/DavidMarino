import React from 'react'
import ReactDocumentTitle from 'react-document-title'

const DocumentTitle = (props) => {
  let { title } = props;
  const { children } = props;

  title += '- David Sirena'

  return (
    <ReactDocumentTitle title={title}>
      {children}
    </ReactDocumentTitle>
  )
}

export default DocumentTitle;
