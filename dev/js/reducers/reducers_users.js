const UserReducer =()=>
{

	return (
	[
		{
			Name:"Ronaldo",
			id:1,
			Age:21,
			status:'false',
			src:"http://images.performgroup.com/di/library/goal_es/d9/ba/cristiano-ronaldo-real-madrid-alaves-la-liga_id192xyn6ben1kd1s88jz0za2.jpg?t=796663995",
			info:"A prolific goalscorer, Ronaldo holds the records for most official goals scored in the top five European leagues (369), the UEFA Champions League (105) and the UEFA European Championship (29), as well as the most goals scored in a UEFA Champions League season (17). He has scored more than 600 senior career goals for club and country."
		},

		{
			Name:"Messi",
			Age:21,
			status:'false',
			info:"Lionel Andrés Messi born 24 June 1987) is an Argentine professional footballer who plays as a forward for Spanish club FC Barcelona and the Argentina national team.",

			id:2,
			src:"https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/04/04/10/lionel-messi.jpg"
		},
		{
			Name:"Neymar Jr.",
			id:3,
			status:'false',
			info:"With 52 goals in 77 matches for Brazil since debuting at age 18, Neymar is the fourth-highest goalscorer for his national team. He was a key player in Brazil's victories at the 2011 South American Youth Championship, which he finished as the leading goalscorer, and the 2013 FIFA Confederations Cup, where he won the Golden Ball as player of the tournament.",

			Age:21,
			src:"http://i.dailymail.co.uk/i/pix/2016/06/10/10/32C8091B00000578-3634861-image-a-5_1465550309837.jpg"
		},
		{
			Name:"Wayne Rooney",
			Age:21,
			id:4,
			status:'false',
			info:" This player is the record goalscorer for the England national team and for Manchester United. At club level, he has won every honour available in English, Continental and European football, with the exception of the European Super Cup",

			src:"https://i.ytimg.com/vi/fm-ANLTqTxU/hqdefault.jpg"
		}


	]

		);
}

export default UserReducer;