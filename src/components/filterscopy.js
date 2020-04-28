handleDateChange(event) {
    let payload = this.props.filters
    if( event.target.name === 'dateFrom' && Date.parse(event.target.value) < new Date(0)){ // Revisa que la fecha de entrada no sea menor a hoy, el problema es que toma new Date con todos sus
      console.log(new Date(0));
      this.props.onFilterChange(payload)
    } else if( event.target.name === 'dateTo' &&
    Date.parse(event.target.value) < this.props.filters.dateFrom) { // Revisa que la fecha de salida no sea menor a la de entrada
      this.props.onFilterChange(payload)
      console.log('prueba 2');
    } else {
      payload[event.target.name] = event.target.value
      this.props.onFilterChange(payload)
      console.log('prueba 3');
    }

  }