import React from 'react'

export default function InputAddress() {
    return (
        <div>
            <div>
                <input type="text" placeholder='Your Address' />
                <input type="text" placeholder='Pin Code' />
            </div>
            <input type="text" placeholder='Nearby Landmark' />
        </div>
    )
}
