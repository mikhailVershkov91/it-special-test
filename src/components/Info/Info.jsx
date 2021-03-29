import React from "react";
import s from "./Info.module.css";

const Info = () => {
	return (
		<div className={s.info}>
			<div className={s.info__container}>
				<div>
					<span>User selected:</span> {}
				</div>
				<div>
					<span>Description:</span> Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Qui necessitatibus molestiae omnis tempora eos cum
					et itaque recusandae quod. Perspiciatis veritatis quae possimus rem
					sequi eius adipisci illum dicta placeat?
				</div>
				<div>
					<span>Address:</span> {}
				</div>
				<div>
					<span>City:</span> {}
				</div>
				<div>
					<span>State:</span> {}
				</div>
				<div>
					<span>Zip code:</span> {}
				</div>
			</div>
		</div>
	);
};

export default Info;
