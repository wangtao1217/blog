import React from "react"
import { graphql } from "gatsby"
import Layout from "./components/Layout"
import Main from "./components/Main"
import ReactMarkdown from "react-markdown"
import Tag from "./components/tag"

const Empty =  () => {
  // const post = data.markdownRemark
  // console.log(context);
  return (
      <div className="text-gray-500 text-light text-3xl h-full w-full bg-white rounded-2xl center">
          π³βπ θΏιζζΆθΏε₯δΉζ²‘ζ...
      </div>
  )
}

export default Empty

// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       html
//       htmlAst
//       rawMarkdownBody
//       frontmatter {
//         title
//         date
//       }
//     }
//   }
// `
