import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import './ItemCard.css'
const ItemCard = (props) => {
  const [liked, setLiked] = useState(false)
  const [truncate, setTruncate] = useState(false)

  const handleLike = () => {
    setLiked(!liked)
  }
  
  return (
    <div className='card'
      style={{
        height: '400px',
      }}
    >
      <div className='heart-icon-container d-flex justify-content-end align-items-end me-2 mb-2 mt-2'>
        <span>
          {liked ? (
            <AiFillHeart
              size={25}
              className='text-danger'
              onClick={handleLike}
              style={{
                cursor: 'pointer',
              }}
            />
          ) : (
            <AiOutlineHeart
              size={25}
              onClick={handleLike}
              style={{
                cursor: 'pointer',

              }}
            />
          )}
        </span>
      </div>
      <img
        src={props.image}
        alt='item'
        className='card-img-top'
        style={{
            height: '210px',
            objectFit: 'contain',
          }}
      />
      <div className='card-body'>
        <div className='d-flex justify-content-between'>
          <p className='small'><a href='' className='text-muted'>
            {props.category}
            </a></p>
          <p className='small text-muted'>In Stock</p>
        </div>
        <div className='d-flex justify-content-between mb-3'>
          <div style={
            {
              width: '100%',
              height: '1.5rem',
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
            }
          }>
          <Link to={`/products/${props.id}`}>
            <h6 className='mb-0 card-title'>
                <span className='text-dark'
                style={{
                  textOverflow: 'ellipsis',
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  display: 'block',
                }}
                >
                  {props.title}
                </span>
            </h6>
          </Link>
          </div>
          <h5 className='text-dark' style={
            {
              fontFamily: 'Arial',
              fontSize: '1.1rem',
              fontWeight: 'bold',
            }
          
          }>${props.price}</h5>
        </div>
        <div className='d-flex justify-content-between align-items-center'>
          <div className='btn-group'>
            <button type='button' className='btn btn-sm btn-outline-secondary'>
              Add to cart
              </button>
            <button type='button' className='btn btn-sm btn-outline-secondary'>
              Buy now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemCard