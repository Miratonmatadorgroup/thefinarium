import { toast} from 'sonner'


export const ErrorMessage = (message) => {
    return toast.error(message, {
        position: "top-center",
        style: {
            backgroundColor: "#dc2626", 
            color: "#ffffff" 
        }
    });
};


export const SuccessMessage = (message) => {
    return toast.success(message, {
        position: "top-center",
        style:{
            backgroundColor:"#5ea95d",
            color:'white'
        }

    })
}

export const MoveToTop = () => {
    document.documentElement.scrollTo({
        top: 0,
    })
}
export const navIcons = [
    {
        name:'Home',path:'/'
    },
    {
        name:'Partners',path:'/'
    },
    {
        name:'Vendors',path:'/'
    },
    {
        name:'Resources',path:'/'
    },
    {
        name:'About Us',path:'/#why-choose-us'
    },
]