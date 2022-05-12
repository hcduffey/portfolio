import Icon from "./Icon";

const IconList = () => {
    const iconArray = [
        {name:"Github", url:"https://github.com/hcduffey", img:"github.png" },
        {name:"LinkedIn", url:"https://linkedin.com/in/cduffey", img:"linkedin.png"},
        {name:"Twitter", url:"https://twitter.com/cliffduffey2", img:"twitter.png"}
    ];

    return(
        <div className="icon-list-container">
            {
                iconArray.map((icon, idx) => {
                    return(
                        <Icon key={idx} icon={icon} />
                    );
                })
            }
        </div>
    )
}

export default IconList;