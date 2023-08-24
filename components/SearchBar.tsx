"use client"

import React from 'react'
import { useState } from 'react'
import { SearchManufacturer } from '.'

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState('')
  const handleSearch = () => {}

  return (
    <form action="" className='searchbar' onSubmit={handleSearch}>
        <div className='searchbar__item'>
            <SearchManufacturer manufacturer={manufacturer} setManufacturer={setManufacturer}></SearchManufacturer>
        </div>
    </form>
  )
}

export default SearchBar