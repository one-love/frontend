import background from './background.svg'
import logo from './love.svg'

export default {
  photo: {
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: 'calc(100vh - 65px)',
  },

  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    width: '100%',
    height: 'calc(100vh - 74px)',
   },

  secondiv: {
    display: 'grid',
    gridTemplateColumns: '50% 50%',
    textAlign: 'column',
    width: '100%',
    height: '100vh',
   },

  contentgrid1: {
    textAlign: 'center',
    marginLeft: 50,
   },      

  button2: {
	marginTop: 20,
   },

  centercontent: {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	height: '100%',
	width: '100%',
   },
   
  contentgrid2: {
    backgroundImage: `url(${logo})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    height: '50%',
    width: '50%',
   },
      
   title: {
     fontSize: 35,
     backgroundColor: 'white',
     marginLeft: 30,
     marginRight: 30,
   },
   
   h3: {
	 fontSize: 20,
   backgroundColor: 'white',
  },
}
