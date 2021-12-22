import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

export default function Card({ min, max, name, img, onClose, id }) {
	return (
		<div className="card">
			<Link to={`/ciudad/${id}`} className="cardBtn">
				<div id="closeIcon" className="row">
					<button onClick={onClose} className="btn btn-sm btn-danger">
						X
					</button>
				</div>
				<div className="card-body">
					<h5 className="card-title">{name}</h5>

					<div className="row">
						<div className="col-xs-4 temp">
							<p>
								<b>Min</b>
							</p>
							<p>{min / 10}°</p>
						</div>
						<div className="col-xs-4 temp">
							<p>
								<b>Max</b>
							</p>
							<p>{max / 10}°</p>
						</div>
						<div className="col-xs-4">
							<img
								className="iconoClima"
								src={'http://openweathermap.org/img/wn/' + img + '@2x.png'}
								width="80"
								height="80"
								alt=""
							/>
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
}
