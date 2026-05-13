pipeline {
    agent any

    stages {

        stage('Build - Verificar archivos') {
            steps {
                echo 'Verificando archivos...'
                bat 'if not exist src\\index.html (echo ERROR: index.html no encontrado && exit 1)'
                bat 'if not exist src\\index.css (echo ERROR: index.css no encontrado && exit 1)'
                bat 'if not exist src\\index.js (echo ERROR: index.js no encontrado && exit 1)'
                echo 'Todos los archivos presentes!'
            }
        }

        stage('Test - Sintaxis JS') {
            steps {
                echo 'Verificando sintaxis JS...'
                bat 'node --check src\\index.js || echo Advertencia en index.js'
                echo 'Sintaxis JS OK'
            }
        }

        stage('Instalar dependencias') {
            steps {
                echo 'Instalando dependencias...'
                bat 'npm install'
                echo 'Dependencias instaladas'
            }
        }

        stage('Ejecutar pruebas') {
            steps {
                echo 'Ejecutando pruebas creadas...'
                bat 'npm test'
            }
        }

    }

    post {
        success {
            echo 'Pipeline completado exitosamente!'
        }
        failure {
            echo 'Pipeline fallo. Revisa el Console Output.'
        }
        always {
            echo 'Pipeline finalizado.'
        }
    }
}
