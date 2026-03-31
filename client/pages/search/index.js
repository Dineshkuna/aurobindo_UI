import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { breadCrumbDetails } from '../../components/Layout/breadcrumbs';
var stringSimilarity = require("string-similarity");

const propTypes = {};

const defaultProps = {};

const index = ({ searchText }) => {


  if (searchText == null || searchText === '') {
    return (<h4 style="color:red">Please enter some search text</h4>);
  }

  let selectedTemp = [];
  Object.keys(breadCrumbDetails).forEach(element => {
    breadCrumbDetails[element].name = element;
    try {
      breadCrumbDetails[element].pathTemp = Object.values(breadCrumbDetails[element]['path'])[0];
    } catch (error) {
      breadCrumbDetails[element].pathTemp = "#";
    }
    breadCrumbDetails[element].similarity = stringSimilarity.compareTwoStrings(searchText, element);

    if (stringSimilarity.compareTwoStrings(searchText, element) > 0) {
      selectedTemp.push(breadCrumbDetails[element]);
    }
  });

  selectedTemp.sort((a, b) => a.similarity - b.similarity);
  selectedTemp.reverse();
  const [selectedItems, setSelectedItems] = useState(selectedTemp)
  console.log(selectedItems.length)

  return (
    <>
    <div className="container clearfix">
        <div className="row gutter-40 col-mb-80">
          <div className="postcontent col-lg-12">
          <br></br><span>Searched Pages for <b><i>{searchText}</i></b></span> <hr></hr>
          </div>
          </div>
          </div>
      <div className="container clearfix">
        <div className="row gutter-40 col-mb-80">
          <div className="postcontent col-lg-12">
            
            {selectedItems !== null && selectedItems !== undefined ? selectedItems.map(item => {
              return (<>
                <h3>{item.name} </h3>
                <div>
                  <a href={item.pathTemp}> Read more <i className="icon-line-chevron-right"></i></a>
                </div>
                <div className="divider divider-border divider-right"></div>
              </>);
            }) : ""}
          </div>
        </div>
      </div>
    </>
  );
}

index.propTypes = propTypes;
index.defaultProps = defaultProps;
// #endregion

index.getInitialProps = async ({ query }) => {
  const { searchText } = query;
  return { searchText };
}
export default index;