



// import { Document, pdfjs, Page} from "react-pdf";
// import styled from "styled-components";

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// const PDFDocumentWrapper = styled.div`
//   canvas {
//     width: 100% !important;
//     height: auto !important;
//   }
// `;

// const PaddingDiv = styled.div`
//     padding-bottom: 100px;
// `;

// const BorderDiv = styled.div`
//     margin: 20px;
//     border: .2em solid ; 
//     margin-bottom: 100px;
// `



// class MyResume extends React.Component {
//   state = {};

//   render() {
//     let pagination = null;

//     if (this.state.pages) {
//       pagination = this.renderPagination(this.state.page, this.state.pages);
//     }
//     return (
//       <PaddingDiv>
//         <BorderDiv>
//           <PDFDocumentWrapper>
//             <Document
//               file="/resume.pdf"
//               onDocumentComplete={this.onDocumentComplete}
//               onLoadError={() => {
//                 console.log("CALLED");
//               }}
//               onLoadProgress={() => {
//                 console.log("PRGREOSS");
//               }}
//               page={this.state.page}
//             >
//               <Page pageNumber={1}
//               />
//             </Document>
//           </PDFDocumentWrapper>
//         </BorderDiv>
//         {pagination}
//       </PaddingDiv>
//     );
//   }
// }
 // onDocumentComplete = (pages) => {
  //   this.setState({ page: 1, pages });
  // };

  // handlePrevious = () => {
  //   this.setState({ page: this.state.page - 1 });
  // };

  // handleNext = () => {
  //   this.setState({ page: this.state.page + 1 });
  // };

  // renderPagination = (page, pages) => {
  //   let previousButton = (
  //     <li className="previous" onClick={this.handlePrevious}>
  //       <a href="#">
  //         <i className="fa fa-arrow-left" /> Previous
  //       </a>
  //     </li>
  //   );
    // if (page === 1) {
    //   previousButton = (
    //     <li className="previous disabled">
    //       <a href="#">
    //         <i className="fa fa-arrow-left" /> Previous
    //       </a>
    //     </li>
    //   );
    // }
    // let nextButton = (
    //   <li className="next" onClick={this.handleNext}>
    //     <a href="#">
    //       Next <i className="fa fa-arrow-right" />
    //     </a>
    //   </li>
    // );
    // if (page === pages) {
    //   nextButton = (
    //     <li className="next disabled">
    //       <a href="#">
    //         Next <i className="fa fa-arrow-right" />
    //       </a>
    //     </li>
    //   );
    // }
  //   return (
  //     <nav>
  //       <ul className="pager">
  //         {previousButton}
  //         {nextButton}
  //       </ul>
  //     </nav>
  //   );
  // };