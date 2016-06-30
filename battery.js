class Battery {
    constructor(top, right, left, maxHeight = 170, minHeight = 0) {
      this.top = document.getElementById(top);
      this.right = document.getElementById(right);
      this.left = document.getElementById(left);
      this.maxVal = maxHeight;
      this.minVal = minHeight;
      this.startVal = -107;
    }

    setPercentage(percentage) {
      const status = this.determineStatus(percentage);
      let pixelAmount = (this.maxVal * percentage) / 100;
      pixelAmount += this.minVal;

      this.updateTop(pixelAmount, status);
      this.updateRight(pixelAmount, status);
      this.updateLeft(pixelAmount, status);
    }

    updateTop(pixelAmount, status) {
      this.top.setAttribute('data-status', status);
      this.top.style.transform = 'translateZ('+ pixelAmount +'px)';
    }

    updateRight(pixelAmount, status) {
      const translateZ = this.startVal + (pixelAmount / 2);
      this.right.setAttribute('data-status', status);
      this.right.style.height = pixelAmount + 'px';
      this.right.style.transform = 'rotateX(90deg)  translateY(50%) translateZ('+ translateZ +'px)';
    }

    updateLeft(pixelAmount, status) {
      const translateZ = this.startVal + (pixelAmount / 2);
      this.left.setAttribute('data-status', status);
      this.left.style.width = pixelAmount + 'px';
      this.left.style.transform = 'rotateY(-90deg)  translateX(50%) translateZ('+ translateZ +'px)';
    }

    determineStatus(percentage) {
      let status = 'critical';
      if (percentage > 80) {
        status = 'full';
      }
      else if (percentage > 40) {
        status = 'normal';
      }
      else if (percentage > 20) {
        status = 'low';
      }
      return status;
    }
}

const batt = new Battery('isoCubeTop', 'isoCubeRight', 'isoCubeLeft');
batt.setPercentage(30);
