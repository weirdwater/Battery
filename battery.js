class Battery {
    constructor(elementId, maxHeight = 280, minHeight = 25) {
      this.el = document.getElementById(elementId);
      this.maxVal = maxHeight - minHeight;
      this.minVal = minHeight;
    }

    setPercentage(percentage) {
      const status = this.determineStatus(percentage);
      let pixelAmount = (this.maxVal * percentage) / 100;
      pixelAmount += this.minVal;

      this.updateBattery(pixelAmount, status);
    }

    determineStatus(percentage) {
      let status = "critical";
      if (percentage > 80) {
        status = "full";
      }
      else if (percentage > 40) {
        status = "normal";
      }
      else if (percentage > 20) {
        status = "low";
      }
      return status;
    }

    updateBattery(pixelAmount, status) {
      this.el.setAttribute("data-status", status);
      this.el.setAttribute("data-height", pixelAmount);
      // this.el.style.height = pixelAmount;
    }

    setGlow(glowOn) {
      this.el.setAttribute("data-glow", glowOn);
    }
}

const batt = new Battery("battery");
batt.setPercentage(30);
