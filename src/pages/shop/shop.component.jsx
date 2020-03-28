import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import Collection from "../collection/collection.component";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";

import { updateCollections } from "../../redux/shop/shop.actions";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";

const CollectionsOvewviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(Collection);

class ShopPage extends React.Component {
  state = {
    loading: true
  };
  unsubscribreFromSnapsot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    this.unsubscribreFromSnapsot = collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionsOvewviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          exact
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap =>
    dispatch(updateCollections(collectionsMap))
});
export default connect(null, mapDispatchToProps)(ShopPage);
