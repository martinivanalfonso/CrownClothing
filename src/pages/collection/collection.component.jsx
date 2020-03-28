import React from 'react'

import { selectCollection } from '../../redux/shop/shop.selector'
import { connect } from 'react-redux'

import { CollectionPageContainer, TitleContainer, ItemsContainer} from './collection.styles'
import CollectionItem from '../../components/collection-item/collection-item.component'

const Collection = ({ collection }) => {
    const { title, items } = collection
    return( 
    <CollectionPageContainer>
        <TitleContainer>{title}</TitleContainer>
        <ItemsContainer>
            {
                items.map( item => (
                    <CollectionItem key={item.id} item={item} />
                ))
            }
        </ItemsContainer>
    </CollectionPageContainer>
)}

const mapStateToProps = (state, ownProps ) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
}) 

export default connect(mapStateToProps)(Collection)