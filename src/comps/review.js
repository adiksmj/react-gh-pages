function ReviewItems() {
    //mempersiapkan data JSON
    const users = [
      {
        "id": 1,
        "name": "Andi S",
        "review": "Mantap sekali, rencana mau beli lagi 500 pasang nih",
        "img": "https://media-exp1.licdn.com/dms/image/C5603AQFKoEmEt70XGw/profile-displayphoto-shrink_800_800/0/1608974140766?e=1635379200&v=beta&t=OBnhgg3KK6c6OASCEgTWX5yzshTe9WmNEmKB2uTDJyM"
      },
      {
        "id": 2,
        "name": "Okta",
        "review": "Tumben banget beli sepatu sebagus ini",
        "img": "https://media-exp1.licdn.com/dms/image/C5103AQGhHAYYAxCtDA/profile-displayphoto-shrink_800_800/0/1517600952771?e=1635379200&v=beta&t=M1PBN_cbUYHkjvg9BzE-Fi7N14ectoG5EeEZjSq9F1k"
      },
      {
        "id": 3,
        "name": "Rangga",
        "review": "Ini mah kemurahann , untuk bahan sebagus dan setrendi ini",
        "img": "https://media-exp1.licdn.com/dms/image/C5603AQHythUbPDXp_Q/profile-displayphoto-shrink_800_800/0/1622081010514?e=1635379200&v=beta&t=1iedMRLMcB7-F26Rg5bgcugzgI_mnMXDyzMMtufPjJw"
      }
    ];
    const listReview = users.map((userReview) =>
    <div className="Item"> 
            <img src={userReview.img} />
            <div className="User">
              <h3>{userReview.name}</h3>
              <p>{userReview.review}</p>
            </div>
          </div>
    );
    return (
      <div className="Review-box">
        <h2>Reviews</h2>
        {listReview}
      </div>
    )
  }

  export default ReviewItems;